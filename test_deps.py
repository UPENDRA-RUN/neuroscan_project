#!/usr/bin/env python3
"""Test script to check if Python dependencies are available."""

import sys
import subprocess

def check_package(package):
    try:
        __import__(package)
        return True
    except ImportError:
        return False

def install_package(package):
    """Try to install package using various methods."""
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", package])
        return True
    except:
        try:
            subprocess.check_call(["pip3", "install", package])
            return True
        except:
            return False

# Check required packages
packages = ["streamlit", "nibabel", "numpy", "matplotlib"]
missing = []

for pkg in packages:
    if check_package(pkg):
        print(f"✓ {pkg} is available")
    else:
        print(f"✗ {pkg} is missing")
        missing.append(pkg)

if missing:
    print(f"\nAttempting to install missing packages: {missing}")
    for pkg in missing:
        if install_package(pkg):
            print(f"✓ Installed {pkg}")
        else:
            print(f"✗ Failed to install {pkg}")
else:
    print("\n✓ All dependencies are available!")
