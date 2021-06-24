# Angular Contact Book with TypeScript

The goal of this Contact Book app is to provide a simple way to maintain contact information. The sample relies on the Angular CLI to build the application.

## Angular Concepts Covered

* TypeScript version that relies on classes and modules
* Defining routes including **child routes and lazy loaded** routes
* Using **Custom Components** including custom input and output properties
* Using **Custom Directives**
* Using **Custom Pipes** for Dropdown, Initials and Search features
* Defining Properties and Using Events in Components/Directives
* Using **Firebase realtime** Database with **RxJS observables**
* Working with Utility and Service classes (such as search)
* Using Angular databinding Syntax [], () and [()]
* Using **reactive forms** functionality for capturing and **validating data**
* Optional: Webpack functionality is available for module loading and more (see below for details)
* Optional: Ahead-of-Time (AOT) functionality is available for a production build of the project (see below for details)

## Running the Application with Node.js

1. Install the latest LTS version of Node.js from https://nodejs.org. *IMPORTANT: The server uses ES2015 features AND the Angular CLI so you need a current version of Node.js.*

1. Run `npm install` to install app dependencies

1. Run `ng build --prod` to build and bundle the code

1. Run `ng build --prod --aot` to build and AOT bundle

1. Run `ng serve --open` to run app on local environment 

1. Go to http://localhost:4200 in your browser 

Simply clone the project or download and extract the .zip to get started. 

Once the app is running you can play around with editing and managing contacts after you login. Use **manikbiradar365@gmail.com** email address and **Admin@123** password.

Here are a few screenshots from the app:

## Screenshots for Web App
![localhost_4200_login(1366)](https://user-images.githubusercontent.com/64681145/123249923-1f353480-d507-11eb-8d06-c402d69f410a.png)<br />
![localhost_4200_login(1366) (1)](https://user-images.githubusercontent.com/64681145/123249928-20666180-d507-11eb-9624-86e3b2c00237.png)<br />
![localhost_4200_login(1366) (2)](https://user-images.githubusercontent.com/64681145/123249930-20666180-d507-11eb-9841-0d62f618eceb.png)<br />
![localhost_4200_login(1366) (3)](https://user-images.githubusercontent.com/64681145/123249932-20fef800-d507-11eb-947d-e7135fa6e2ee.png)<br />
![localhost_4200_login(1366) (4)](https://user-images.githubusercontent.com/64681145/123249933-21978e80-d507-11eb-86e1-1f11444799a7.png)<br />
![localhost_4200_login(1366) (5)](https://user-images.githubusercontent.com/64681145/123249934-21978e80-d507-11eb-913e-e5ca715ad48e.png)

<br />
## Screenshots for Mobile App
![localhost_4200_contact_0_edit_mode=edit(iPhone 6_7_8) (1)](https://user-images.githubusercontent.com/64681145/123250059-47249800-d507-11eb-8928-a085c3fc01dc.png)<br />
![localhost_4200_contact_0_edit_mode=edit(iPhone 6_7_8) (2)](https://user-images.githubusercontent.com/64681145/123250064-47bd2e80-d507-11eb-8f82-dcc5e9311763.png)<br />
![localhost_4200_contact_add_mode=add(iPhone 6_7_8)](https://user-images.githubusercontent.com/64681145/123250037-42f87a80-d507-11eb-9371-569952e0cbc3.png)<br />
![localhost_4200_contact_add_mode=add(iPhone 6_7_8) (1)](https://user-images.githubusercontent.com/64681145/123250043-4429a780-d507-11eb-926a-16b1db7bda6e.png)<br />
![localhost_4200_contact_add_mode=add(iPhone 6_7_8) (2)](https://user-images.githubusercontent.com/64681145/123250045-44c23e00-d507-11eb-9819-2fe35951ad72.png)<br />
![localhost_4200_contact_add_mode=add(iPhone 6_7_8) (3)](https://user-images.githubusercontent.com/64681145/123250049-45f36b00-d507-11eb-85cb-9e752b3df274.png)<br />
![localhost_4200_contact_0_edit_mode=edit(iPhone 6_7_8)](https://user-images.githubusercontent.com/64681145/123250054-468c0180-d507-11eb-9bb4-c512df38c23f.png)<br />






## Running the Application with Deno

1. Install the latest version of Deno from https://deno.land

1. Run `npm install` to install the Angular dependencies

1. Run `ng build` to build and bundle the code

1. `cd` into `./deno` and run the following command:

    `deno run --allow-net --allow-read --unstable server.ts`
    
1. Go to http://localhost:8080 in your browser 

## Running Angular Playground

This application includes Angular Playground (http://www.angularplayground.it) which provides a great way to isolate components in a sandbox rather than loading the 
entire application to see a given component. To run the playground run the following command:

`npm run playground`

Then open a browser and visit `http://localhost:4201` and follow the directions there (or visit their website for more information).

## Running in Kubernetes

1. Install Docker Desktop from https://www.docker.com/get-started
1. Start Docker and enable Kubernetes in the Docker Desktop preferences/settings
1. Run `docker-compose build` to create the images
1. Run `kubectl apply -f .k8s` to start Kubernetes
1. Visit `http://localhost`
1. Stop Kubernetes using `kubectl delete -f .k8s`

## Running with Skaffold

If you'd like to use the [Skaffold tool](https://skaffold.dev/docs/install) to run the project in Kubernetes, install it, and run the following command:

`skaffold dev`

To generate the `skaffold.yaml` file that's included in the project the following command was run and the image context paths it defines were modified:

```
skaffold init -k '.k8s/*.yml' \
  -a '{"builder":"Docker","payload":{"path":".docker/nginx.dev.dockerfile"},"image":"nginx-angular-jumpstart"}' \
  -a '{"builder":"Docker","payload":{"path":".docker/node.dockerfile"},"image":"node-service-jumpstart"}'
```

If you wanted to generate the initial Kubernetes manifest files from an existing docker-compose.yml file you can use the following command.
It uses the [Kompose tool](https://kompose.io) behind the scenes to create the YAML files

```
skaffold init --compose-file docker-compose.yml \
  -a '{"builder":"Docker","payload":{"path":".docker/nginx.dev.dockerfile"},"image":"nginx-angular-jumpstart"}' \
  -a '{"builder":"Docker","payload":{"path":".docker/node.dockerfile"},"image":"node-service-jumpstart"}'
```


## Running in the Azure Static Web Apps Service

Check out my post on [Getting Started with Azure Static Web Apps](https://blog.codewithdan.com/getting-started-with-azure-static-web-apps). 

<a id="kubernetes-day-zero"></a>
## Kubernetes Day Zero Webinar: Deploying to Kubernetes

Dan Wahlin

Twitter: @DanWahlin

https://codewithdan.com

Resources mentioned:

* https://github.com/danwahlin/angular-jumpstart
* https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands
* https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#-strong-api-overview-strong-
* https://kubernetes.io/docs/reference/kubectl/cheatsheet/

## Agenda

1. Container Orchestration Options (Docker Swarm, Kubernetes)
2. Using Docker Compose

    ```
    docker-compose build
    docker-compose up
    docker-compose down
    ```

3. Docker Stacks --> Docker Desktop --> Kubernetes

    ```
    docker stack deploy -c docker-compose.yml angular-jumpstart
    docker stack ls
    docker stack rm angular-jumpstart
    ```

4. Deploying Containers to Kubernetes

    https://kompose.io/

    ```
    kompose convert -h
    kompose convert -f docker-compose.yml -o ./[your-folder-goes-here]
    ```

    Tweak the generated YAML. Then once ready run:

    ```
    kubectl apply -f [your-folder-name]
    ```

My Kubernetes for Developers video courses on Pluralsight.com:

https://pluralsight.pxf.io/danwahlin




