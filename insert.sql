USE [eQuiz]
GO

INSERT INTO [dbo].[Users]
           ([user_id]
           ,[first_name]
           ,[last_name]
           ,[parent_name]
           ,[email]
           ,[phone]
           ,[is_email_confirmed]
           ,[password_hash]
           ,[security_stamp])
     VALUES
           (1
           ,'Natalya'
           ,'Derevnytska'
           ,'Ihorivna'
           ,'nataderevn@gmail.com'
           ,'012-345-67-89'
           ,0
           ,null
           ,null), 
		   (2
           ,'Vasyl'
           ,'Vorobets'
           ,'Dmytrovych'
           ,'vasylvorob@gmail.com'
           ,'023-456-78-91'
           ,0
           ,null
           ,null),
		   (3
           ,'Vitalii'
           ,'Horak'
           ,'Nazarovych'
           ,'vitaliahorak@gmail.com'
           ,'034-567-89-12'
           ,0
           ,null
           ,null), 
		   (4
           ,'Orest'
           ,'Drach'
           ,'Vasliovych'
           ,'orestdrach@gmail.com'
           ,'045-678-91-23'
           ,0
           ,null
           ,null),
		   (5
           ,'Maksym'
           ,'Bodnar'
           ,'Sviatoslavovych'
           ,'maksbodnar@gmail.com'
           ,'056-789-12-34'
           ,0
           ,null
           ,null)

GO


INSERT INTO [dbo].[UserGroups]
           ([group_id]
           ,[group_name])
     VALUES
           (1
           ,'dotNet'),
           (2
           ,'Java'),
           (3
           ,'FrontEnd (JavaScript, CSS/HTML)'),
           (4
           ,'DWBI (Databases)'),
           (5
           ,'DevOps'),
           (6
           ,'Automated Testing (Java)')
GO

INSERT INTO [dbo].[UsersToUserGroups]
           ([user_id]
           ,[group_id])
     VALUES
           (1, 1),
           (1, 2),
           (2, 2),
           (2, 3),
           (3, 4),
           (4, 4)
GO

INSERT INTO [dbo].[QuizTypes]
           ([quiz_type_id]
           ,[type_name])
     VALUES
           (1
           ,'Auto'), 
		   (2
           ,'Manual'), 
		   (3
           ,'Combined') 
GO


INSERT INTO [dbo].[Quizes]
           ([quiz_id]
           ,[quiz_type_id]
           ,[quiz_name]
           ,[description]
           ,[start_date]
           ,[end_date]
           ,[time_limit_minutes]
           ,[internet_access])
     VALUES
           (1
           ,3
           ,'.Net entrance test'
           ,'initial testing'
           ,'2016-06-01 00:00:00'
           ,'2016-07-01 00:00:00'
           ,60
           ,0), 
           (2
           ,3
           ,'Java entrance test'
           ,'initial testing'
           ,'2016-06-01 00:00:00'
           ,'2016-07-01 00:00:00'
           ,60
           ,0), 
           (3
           ,3
           ,'FrontEnd entrance test'
           ,'initial testing'
           ,'2016-07-01 00:00:00'
           ,'2016-08-01 00:00:00'
           ,60
           ,0), 
           (4
           ,3
           ,'DWBI entrance test'
           ,'initial testing'
           ,'2016-07-01 00:00:00'
           ,'2016-08-01 00:00:00'
           ,60
           ,0), 
           (5
           ,1
           ,'DevOps entrance test'
           ,'initial testing'
           ,'2016-09-01 00:00:00'
           ,'2016-10-01 00:00:00'
           ,30
           ,0), 
           (6
           ,1
           ,'Automated Testing (Java) entrance test'
           ,'initial testing'
           ,'2016-09-01 00:00:00'
           ,'2016-10-01 00:00:00'
           ,30
           ,0), 

           (7
           ,1
           ,'English test'
           ,'entrance testing'
           ,'2016-06-01 00:00:00'
           ,'2016-12-01 00:00:00'
           ,30
           ,0)
GO

USE [eQuiz]
GO

INSERT INTO [dbo].[QuizPasses]
           ([quiz_pass_id]
           ,[quiz_id]
           ,[user_id]
           ,[start_time]
           ,[finish_time])
     VALUES
           (1
           ,1
           ,1
           ,'2016-06-02 10:00:00'
           ,'2016-06-02 10:50:00'),
           (2
           ,2
           ,2
           ,'2016-06-03 10:00:00'
           ,'2016-06-03 10:50:00'),
           (3
           ,3
           ,2
           ,'2016-07-02 10:00:00'
           ,'2016-07-02 10:55:00'),
           (4
           ,3
           ,3
           ,'2016-07-02 10:00:00'
           ,'2016-07-02 10:57:00'),
           (5
           ,4
           ,4
           ,'2016-07-02 10:00:00'
           ,'2016-07-02 10:50:00'),
           (6
           ,7
           ,1
           ,'2016-06-13 10:00:00'
           ,'2016-06-13 10:20:00'),
           (7
           ,7
           ,2
           ,'2016-07-12 10:00:00'
           ,'2016-07-12 10:25:00'),
           (8
           ,7
           ,3
           ,'2016-07-12 10:00:00'
           ,'2016-07-12 10:27:00')
GO

