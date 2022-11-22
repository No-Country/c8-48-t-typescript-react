#!/bin/bash
createuser -s $POSTGRES_USER
createdb -U postgres $POSTGRES_DB
