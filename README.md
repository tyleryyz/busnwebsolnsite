# busnwebsolnsite
Business Web Solutions Site

Software Tutorials & Walkthroughs
---------------------------------
------------Github---------------
# To get started:
Make sure you have a smart editor installed on your machine. <a href="https://atom.io">Atom</a> is recommended.

Windows: Install git-for-windows onto your machine. Get it <a href="https://git-for-windows.github.io/">here</a>.

Execute all following commands in this readme in the gitbash application included in the download of git-for-windows.

Unix/Linux: Download and install <a href="https://git-scm.com/downloads">git</a>

The terminal should be sufficient for all commands.

# To clone the repo:
In your terminal cd into an appropriate directory. for instance you can enter the command:

    cd ~/home/<username>/documents
        
to cd into your documents directory. This path may be different on different machines, 
use the file structure relevant to your Operating System.

Once in a good directory find the clone or download button on the github page for the project to save the link to the repo
in your clipboard. Or just copy this link: 

    https://github.com/tyleryyz/busnwebsolnsite.git

Now in your terminal enter the command:

    git clone <the saved url>
    
This will download a local repository for the project.

Now you are ready to make edits.

# Editing files
Open up your favorite smart text editor pull up the page you want to edit in the repo. You can edit this like you would any other file.

Note: It is advised you enter:

    git status

before any commands to ensure you are pushing the correct files to github and that you don't have any conflicts or other unseen errors.

Important: Before commiting any changes enter this command:

    git pull

This will pull any changes from the remote repository to the local repository, ensuring you won't be changing something that has already been added.

Once you want to commit your changes to the repository enter the following commands:

    git add <file you edited>
    git commit -m "enter a message here about what you added to the project"
    git push

If this is your first time pushing to github you may have to set the upstream branch. Do this by entering the command:

    git push -u origin master

This will allow you to push changes to the remote repository.

After that you will be prompted to enter your github account details and the changes will be made to the files in the remote repository.



------------ReactJS--------------
