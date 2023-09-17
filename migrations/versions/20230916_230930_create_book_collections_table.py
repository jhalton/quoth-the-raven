"""Create book_collections table

Revision ID: b25290252b25
Revises: 439d31071604
Create Date: 2023-09-16 23:09:30.847386

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")
# revision identifiers, used by Alembic.
revision = 'b25290252b25'
down_revision = '439d31071604'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('book_collections',
    sa.Column('collection_id', sa.Integer(), nullable=False),
    sa.Column('book_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['book_id'], ['books.id'], ),
    sa.ForeignKeyConstraint(['collection_id'], ['collections.id'], ),
    sa.PrimaryKeyConstraint('collection_id', 'book_id')
    )
    with op.batch_alter_table('collections', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))

    if environment == "production":
        op.execute(f"ALTER TABLE collections SET SCHEMA {SCHEMA};")
        op.execute(f"ALTER TABLE book_collections SET SCHEMA {SCHEMA};")
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('collections', schema=None) as batch_op:
        batch_op.drop_column('description')

    op.drop_table('book_collections')
    # ### end Alembic commands ###
