# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|

  config.vm.box = "ubuntu/xenial64"

  client_name = File.basename(__dir__)

  config.vm.define client_name do |t|
  end

  config.vm.synced_folder ".", "/vagrant", disabled: true
  config.vm.synced_folder ".", "/home/ubuntu/#{client_name}"
  
  config.vm.provision "shell", privileged: false, inline: <<-SHELL
    sudo apt-get update
    sudo apt-get upgrade -y
    sudo apt-get install -y git make python build-essential checkinstall g++
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
    source $HOME/.nvm/nvm.sh
    nvm install node
    cd #{client_name} && npm install
  SHELL
end
