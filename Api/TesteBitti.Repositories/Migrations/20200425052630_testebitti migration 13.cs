using Microsoft.EntityFrameworkCore.Migrations;

namespace TesteBitti.Repositories.Migrations
{
    public partial class testebittimigration13 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Cliente_ClienteId",
                table: "Endereco");

            migrationBuilder.RenameColumn(
                name: "ClienteId",
                table: "Endereco",
                newName: "clienteId");

            migrationBuilder.RenameIndex(
                name: "IX_Endereco_ClienteId",
                table: "Endereco",
                newName: "IX_Endereco_clienteId");

            migrationBuilder.AlterColumn<int>(
                name: "clienteId",
                table: "Endereco",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Cliente_clienteId",
                table: "Endereco",
                column: "clienteId",
                principalTable: "Cliente",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Endereco_Cliente_clienteId",
                table: "Endereco");

            migrationBuilder.RenameColumn(
                name: "clienteId",
                table: "Endereco",
                newName: "ClienteId");

            migrationBuilder.RenameIndex(
                name: "IX_Endereco_clienteId",
                table: "Endereco",
                newName: "IX_Endereco_ClienteId");

            migrationBuilder.AlterColumn<int>(
                name: "ClienteId",
                table: "Endereco",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Endereco_Cliente_ClienteId",
                table: "Endereco",
                column: "ClienteId",
                principalTable: "Cliente",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
