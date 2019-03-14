namespace SktProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class s : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Products", "UserId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "UserId", c => c.Int(nullable: false));
        }
    }
}
