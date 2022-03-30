# PHONE-BOOK:   Dotnet with Angular

## COMMANDS 

```
dotnet restore
dotnet list package

Add-Migration "InitialCreate"
Update-Database
dotnet watch run

```

## DATABASE ENVIROMENT 

1. version #3 Vs #5
2. AtPort 1344
3. Disable shared memory
4. Firewall-MSSQL1433
5. Start the SQL Browser service
6. PortA "sslPort": 44321
7. Security- allow SQL
8. Require distributed transactiosn for server-to-server communication

## MIGRATION: MSSQL-1: MYSQL-2: POSTGRESS-3:

```
  "ConnectionStrings": {
    "DevConnection": "Server=localhost;Database=PRESLY;Trusted_Connection=True;MultipleActiveResultSets=True;"
  }

```

## OBJECTS CONTROLLED

1. Worker-Employee
2. Contact
3. Banker

## Interface UX

Below are some Screens shots from the application

![ Muntu#1 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page1.png)
![ Muntu#2 ](https://github.com/LINOSNCHENA/DOTNET-Phone-book/blob/master/UXViews/page2.png)


## Versioning and Updates:  LECTURE # 36

```
03/30/2022

```

# END

