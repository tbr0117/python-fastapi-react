from sqlalchemy import create_engine, engine
from sqlalchemy.orm import sessionmaker
from pydantic import PostgresDsn
from sqlalchemy.orm.session import Session

destination = PostgresDsn.build(
    scheme="postgresql",
    user="postgres",
    password="password",
    host="localhost",
    port="30701",
    path="/postgres"
)

db_engine = create_engine(destination)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
