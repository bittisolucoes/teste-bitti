using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TesteBitti.Repositories;
using TesteBitti.Repositories.Interfaces;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace TesteBitti.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            services.AddDbContext<DataContext>(x =>
               x.UseMySql(Configuration.GetConnectionString("DefaultConnection")));
            services.AddMvc().AddJsonOptions(Options =>{
                Options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            }
            );
            services.AddCors();
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<IEnderecoRepository, EnderecoRepository>();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env,ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseMvc();
            app.UseCors(option => option.AllowAnyOrigin()
                                        .AllowAnyHeader()
                                        .AllowAnyMethod()
            );
        }
    }
}
