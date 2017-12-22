CREATE DATABASE scorigami
ON ( 

   NAME = scorigami_data,
   FILENAME = 'D:\databases\scorigami.mdf',
   SIZE = 10GB,
   MAXSIZE = 100GB,
   FILEGROWTH = 8GB

)
LOG ON ( 

   NAME = scorigami_log,
   FILENAME = 'D:\databases\logs\scorigami_log.ldf',
   SIZE = 5GB,
   MAXSIZE = 50GB,
   FILEGROWTH = 8GB

);