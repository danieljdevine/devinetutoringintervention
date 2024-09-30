#!/bin/bash

stage=$1

sls deploy --stage $stage && sls s3deploy --stage $stage