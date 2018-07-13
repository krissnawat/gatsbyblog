---
templateKey: blog-post
path: /entity-framework-no-type-was-specified-for-the-decimal-column
title: Fixing Entity Framework Validation 30000 No Type Specified for the Decimal Column
date: 2018-07-12T20:12:23.000Z
modifiedDate: 2018-07-12T20:12:23.000Z
cover: /cover/entity-framework-no-type-was-specified-for-the-decimal-column.png
description: Here's a quick fix for Entity Framework's Validation 30000 errors that show up on decimal columns.
tags:
  - .NET Core
  - .NET
  - Errors
---

If you are using Entity Framework in a .NET Core project, you might run into the following issue if you have decimal fields.

    Microsoft.EntityFrameworkCore.Model.Validation[30000]
    No type was specified for the decimal column 'Price' on entity type 'Product'. This will cause values to be silently truncated if they do not fit in the default precision and scale. Explicitly specify the SQL server column type that can accommodate all the values using 'ForHasColumnType()'.

This means Entity Framework will provide a default precision to the database. The default is typically (18, 2). That means it will store 18 total digits, with 2 of those digits being to the right of the decimal point.

* If your record has more than 2 decimal points, SQL Server will truncate the extras.
* If your record has more than 18 total digits, you will get an "out of range" error.

The easiest fix is to use Data Annotations to declare a default on your model. The data annotation looks like: `[Column(TypeName = "decimal(18,2)")]`

For a model named Product with a Price attribute, it would look like this:

```csharp
public class Product {
    public int ID { get; set; }
    public string Title { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
}
```

You can adjust the value away from the default 18, 2 if you need.

You can also add it to the OnModelCreating method of your DbContext implementation instead of the above method. It would look similar to the following:

```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    base.OnModelCreating(modelBuilder);
    modelBuilder.Entity<Product>()
        .Property(p => p.Price)
        .HasPrecision(18, 2);
}
```

Once you add your migration, you can expect to receive the warning "An operation was scaffolded that may result in the loss of data. Please review the migration for accuracy."

This is telling you the same as the original error. You've now specified the precision to be (18, 2). If for any reason your default precision wasn't that, your data may be modified when you update the database.