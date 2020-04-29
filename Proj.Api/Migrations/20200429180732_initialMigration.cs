using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Proj.Api.Migrations
{
    public partial class initialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Client",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    name = table.Column<string>(nullable: true),
                    cpfCnpj = table.Column<string>(nullable: true),
                    nascimento = table.Column<string>(nullable: true),
                    sexo = table.Column<string>(nullable: true),
                    inscEstadual = table.Column<string>(nullable: true),
                    profissao = table.Column<string>(nullable: true),
                    cep = table.Column<string>(nullable: true),
                    logradouro = table.Column<string>(nullable: true),
                    num = table.Column<int>(nullable: false),
                    bairro = table.Column<string>(nullable: true),
                    cidade = table.Column<string>(nullable: true),
                    estado = table.Column<string>(nullable: true),
                    complemento = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Client", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Client");
        }
    }
}
