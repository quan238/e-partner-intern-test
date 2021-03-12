IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210310210924_InitialCreate')
BEGIN
    CREATE TABLE [Customers] (
        [CustomerID] nvarchar(450) NOT NULL,
        [CompanyName] nvarchar(40) NULL,
        [ContactName] nvarchar(30) NULL,
        [ContactTitle] nvarchar(30) NULL,
        [Address] nvarchar(60) NULL,
        [City] nvarchar(15) NULL,
        [Region] nvarchar(15) NULL,
        [PostalCode] nvarchar(10) NULL,
        [Country] nvarchar(15) NULL,
        [Phone] nvarchar(24) NULL,
        [Fax] nvarchar(24) NULL,
        CONSTRAINT [PK_Customers] PRIMARY KEY ([CustomerID])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20210310210924_InitialCreate')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20210310210924_InitialCreate', N'3.1.0');
END;

GO

