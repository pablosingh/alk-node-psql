create table user_bank(
    id numeric,
    username varchar(255),
    balance float,
    CONSTRAINT USER_PK PRIMARY KEY (id)
);

create table operation (
    id numeric,
    type_op varchar(255),
    amount float,
    balance float,
    user_bank numeric,
    CONSTRAINT OPERATION_PK PRIMARY KEY (id)
);

alter table operation 
    add constraint FK_OPERATION_USER
    FOREIGN KEY (user_bank)
    REFERENCES user_bank (id);

insert into user_bank (id, username, balance) values (1, 'pablo', 100);
insert into user_bank (id, username, balance) values (2, 'roberto', 100);
insert into user_bank (id, username, balance) values (3, 'manuel', 100);

insert into operation (id, type_op, amount, balance, user_bank ) 
    values (1, 'deposit', 10, 110, 1);



