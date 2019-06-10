 INSERT INTO Categoria(Categoria)
 VALUES('$'), ('$$'), ('$$$');

INSERT INTO Pizzaria(Localizacao, Nome, Horario_Funcionamento, CNPJ, Vegan, Id_Categoria, Telefone)
 VALUES('Alameda Barao de Limeita, 539', 'das 7h30 as 11h30','Pizzaria Senai','33422907000110',1,1,'951194394'),
	   ('far away, 666', 'das 7h30 as 11h30','Pizzaria far away','33422907990110',1,2,'952194394')

 INSERT INTO Tipo_Usuario(Permissao)
 VALUES('Admin'), ('Comum');

 INSERT INTO Usuarios(Email, Senha, Id_Tipo_Usuario)
 VALUES ('gandolf@admin.com','132', 1),
		('usuario@comum.com','senha', 2),
		('outrousuario@comum.com','senha', 2)