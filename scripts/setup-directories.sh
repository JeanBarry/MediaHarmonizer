#!/bin/bash

echo -e "Please select the directory where the UNORGANIZED media files are located."
read -n 1 -s -r -p "Press any key to continue"


unorganized_directory=$(zenity --file-selection --directory --title="Select unorganized media directory")

echo -e "\nPlease select the directory where the ORGANIZED media files will be stored."
read -n 1 -s -r -p "Press any key to continue"


organized_directory=$(zenity --file-selection --directory --title="Select organized media directory")

echo -e "\nUnorganized directory: $unorganized_directory"
echo "Organized directory: $organized_directory"

if [ -d "$unorganized_directory" ] && [ -d "$organized_directory" ]; then
    echo "NEXT_PUBLIC_UNORGANIZED_DIR=$unorganized_directory" > .env
    echo "NEXT_PUBLIC_ORGANIZED_DIR=$organized_directory" >> .env
else
    echo "Directories do not exist. Please try again."
    exit 1
fi
