#!/bin/sh
# Author: hyfi
i=1
while [ $i -le 10 ]
do
        curl -o pitcam-new.jpeg "http://10.0.0.253/SnapshotJPEG?Resolution=640x480&Quality=Precision" > /dev/null 2>&1
        mv pitcam-new.jpeg pitcam.jpeg
        sleep 1
done
