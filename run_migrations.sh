#!/usr/bin/env bash
for migrationFile in ./migrations/*
do
  mysql -h 127.0.0.1 -u root --password=password mysql < $migrationFile
done
