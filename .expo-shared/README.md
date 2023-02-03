> Why do I have a folder named ".expo-shared" in my project?

The ".expo-shared" folder is created when running commands that produce state that is intended to be shared with all developers on the project. For example, "npx expo-optimize".

> What does the "assets.json" file contain?

The "assets.json" file describes the assets that have been optimized through "expo-optimize" and do not need to be processed again.

> Should I commit the ".expo-shared" folder?

Yes, you should share the ".expo-shared" folder with your collaborators.


##How to deploy this app to the Expo ?

###Step 1: Create an account
  [Sign up Expo](https://expo.dev/signup)

###Step 2: Deploy our application
```
sudo npm install -g expo-cli
```

###Step 3: Logging in
```
expo login
```
  >enter username or email
  >enter passworde
```
expo publish
```