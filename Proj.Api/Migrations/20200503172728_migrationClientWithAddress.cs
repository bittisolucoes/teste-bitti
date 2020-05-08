using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace Proj.Api.Migrations
{
    public partial class migrationClientWithAddress : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.AddColumn<string>(
                name: "bairro",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "cep",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "cidade",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "complemento",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "estado",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "logradouro",
                table: "Clients",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "num",
                table: "Clients",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "bairro",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "cep",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "cidade",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "complemento",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "estado",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "logradouro",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "num",
                table: "Clients");

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    addressId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    bairro = table.Column<string>(nullable: true),
                    cep = table.Column<string>(nullable: true),
                    cidade = table.Column<string>(nullable: true),
                    clientId = table.Column<int>(nullable: false),
                    complemento = table.Column<string>(nullable: true),
                    estado = table.Column<string>(nullable: true),
                    logradouro = table.Column<string>(nullable: true),
                    num = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.addressId);
                    table.ForeignKey(
                        name: "FK_Addresses_Clients_clientId",
                        column: x => x.clientId,
                        principalTable: "Clients",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_clientId",
                table: "Addresses",
                column: "clientId",
                unique: true);
        }
    }
}
