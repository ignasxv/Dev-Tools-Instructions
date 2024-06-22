# Configuring Git in WSL
[Source](https://dev.to/stephanlamoureux/configuring-git-in-wsl-5e3m)
## Requirements
- Windows 10/11
- WSL installed
- Ubuntu/Debian based Linux distributions

## 📝 Git Config

Ensure Git is installed:
```sh
sudo apt install git
```

### Set Name
```sh
git config --global user.name "Your Name"
```

### Set Email
```sh
git config --global user.email "youremail@domain.com"
```

### Set Username
```sh
git config --global user.username "GitHub username"
```

Verify settings with:
```sh
git config --global user.name
```

## 😺 GitHub Credentials

### Create Personal Access Token

Follow [GitHub docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to create your token.

### Git Credential Manager

Install Git for Windows with GCM or download GCM standalone.

### Storing Your Token

Set up GCM in WSL:
```sh
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"
```

If you encounter errors, use:
```sh
git config --global credential.helper store
```
