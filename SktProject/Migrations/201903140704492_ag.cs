namespace SktProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ag : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "ProducerId", "dbo.Producers");
            DropIndex("dbo.Products", new[] { "ProducerId" });
            AddColumn("dbo.Products", "UserId", c => c.Int(nullable: false));
            AddColumn("dbo.Products", "User_Id", c => c.String(maxLength: 128));
            CreateIndex("dbo.Products", "User_Id");
            AddForeignKey("dbo.Products", "User_Id", "dbo.AspNetUsers", "Id");
            DropColumn("dbo.Products", "ProducerId");
            DropTable("dbo.Producers");
        }
        
        public override void Down()
        {
            CreateTable(
                "dbo.Producers",
                c => new
                    {
                        ProducerId = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.ProducerId);
            
            AddColumn("dbo.Products", "ProducerId", c => c.Int(nullable: false));
            DropForeignKey("dbo.Products", "User_Id", "dbo.AspNetUsers");
            DropIndex("dbo.Products", new[] { "User_Id" });
            DropColumn("dbo.Products", "User_Id");
            DropColumn("dbo.Products", "UserId");
            CreateIndex("dbo.Products", "ProducerId");
            AddForeignKey("dbo.Products", "ProducerId", "dbo.Producers", "ProducerId", cascadeDelete: true);
        }
    }
}
