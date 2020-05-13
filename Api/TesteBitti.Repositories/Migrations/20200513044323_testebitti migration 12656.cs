using Microsoft.EntityFrameworkCore.Migrations;

namespace TesteBitti.Repositories.Migrations
{
    public partial class testebittimigration12656 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Numero",
                table: "Endereco",
                nullable: true,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Numero",
                table: "Endereco",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
