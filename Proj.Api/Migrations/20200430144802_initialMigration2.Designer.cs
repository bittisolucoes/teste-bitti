﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Proj.Api;

namespace Proj.Api.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20200430144802_initialMigration2")]
    partial class initialMigration2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("Proj.Api.Domain.Client", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("bairro");

                    b.Property<string>("cep");

                    b.Property<string>("cidade");

                    b.Property<string>("complemento");

                    b.Property<string>("cpfCnpj");

                    b.Property<string>("estado");

                    b.Property<string>("inscEstadual");

                    b.Property<string>("logradouro");

                    b.Property<string>("name");

                    b.Property<string>("nascimento");

                    b.Property<int>("num");

                    b.Property<string>("profissao");

                    b.Property<string>("sexo");

                    b.HasKey("id");

                    b.ToTable("Client");
                });
#pragma warning restore 612, 618
        }
    }
}
