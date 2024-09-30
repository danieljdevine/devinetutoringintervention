#!/bin/bash

stage=$1

sls remove --stage $stage && sls deploy --stage $stage && sls s3deploy --stage $stage