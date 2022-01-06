import logging
from sqlalchemy import engine_from_config, pool
from alembic import context
from tenacity import after_log


from db.session import SessionLocal

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def init() -> None:
    try:
        db = SessionLocal()

        db.execute("SELECT 1")
    except Exception as e:
        logger.error(e)


def main() -> None:
    logger.info("Initilaize Service")
    init()
    logger.info("Serice finished initializing")


if __name__ == "__main__":
    main()
