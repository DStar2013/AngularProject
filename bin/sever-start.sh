#! /bin/bash
cd ..
fis3 server clean --root ./deployed
mkdir ./deployed
fis3 server start -p 20000 --root ./deployed
