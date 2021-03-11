using Microsoft.EntityFrameworkCore.Migrations;

namespace webAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustomerID = table.Column<string>(nullable: false),
                    CompanyName = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    ContactName = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    ContactTitle = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(60)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Region = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    PostalCode = table.Column<string>(type: "nvarchar(10)", nullable: true),
                    Country = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(24)", nullable: true),
                    Fax = table.Column<string>(type: "nvarchar(24)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustomerID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
