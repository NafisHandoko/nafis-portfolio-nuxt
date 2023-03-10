<template>
    <section class="bg-black-primary text-white py-12">
        <div class="container mx-auto flex flex-col items-center px-10 md:px-40">
            <div class="flex flex-row items-center mb-10 w-full gap-5">
                <div @click="back"
                    class="w-10 h-10 flex items-center justify-center rounded-full border border-white cursor-pointer hover:bg-white hover:text-black-primary transition-all">
                    <i class="bi bi-arrow-left-short"></i></div>
                <h1 class="font-bold text-2xl">Project Detail</h1>
            </div>
            <div class="flex flex-col md:flex-row items-start gap-10">
                <!-- <div class="bg-center bg-cover w-full aspect-square shadow-xl rounded-lg bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')]"></div> -->
                <img class="w-full md:w-1/2 rounded-lg"
                    :src="projects[projectId].img"
                    alt="">
                <div class="w-full md:w-1/2 flex flex-col items-start gap-4">
                    <h2 class="font-bold text-xl">{{projects[projectId].title}}</h2>
                    <p class="text-white/[.8]">Tech Stack : React, Tailwind, Golang, PostgreSQL</p>
                    <div class="grid grid-cols-3 lg:grid-cols-4 grid-flow-row auto-rows-max gap-2">
                        <VBadge outlined color="primary">E-Commerce</VBadge>
                        <VBadge outlined color="secondary">Fullstack</VBadge>
                        <VBadge outlined color="warning">API</VBadge>
                        <VBadge outlined color="info">Javascript</VBadge>
                        <VBadge outlined color="success">SQL</VBadge>
                        <VBadge outlined color="error">Vercel</VBadge>
                    </div>
                    <div class="flex flex-row items-center gap-3 text-xl">
                        <a class="" href="https://github.com/nafishandoko"><i class="bi bi-github"></i></a>
                        <a class="" href="https://github.com/nafishandoko"><i class="bi bi-box-arrow-up-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="bg-black-primary text-white">
        <div class="container mx-auto flex flex-col gap-3 px-10 md:px-40">
            <h2 class="font-bold text-xl">Description</h2>
            <p class="text-white/[.8]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vitae quaerat
                alias! Esse ea commodi odit
                ad, dolor impedit magni cumque aut maxime amet nobis, consectetur doloribus libero recusandae sint eius
                architecto alias officia facilis nihil! Possimus doloremque amet quam animi quis saepe nisi reprehenderit
                ullam sunt officia, iure nam id temporibus, quos libero beatae harum adipisci nobis maiores facilis ut
                distinctio necessitatibus consectetur. Aperiam mollitia iusto praesentium alias culpa magni saepe, quibusdam
                provident, dolores enim fugit suscipit ea voluptates non vitae! Sint, adipisci fuga ducimus totam est
                dolorem accusamus consequuntur earum quae asperiores ea! Ab officia id quasi quaerat.</p>
        </div>
    </section>
</template>

<script setup>
const router = useRouter();
const back = () => {
    router.back();
}

const route = useRoute()
// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
const projectId = ref(route.params.id)

const projects = ref([
    {
        "title": "mdpreviewer",
        "shortDesc": "Markdown Previewer with Reactjs and Redux for freeCodeCamp submission",
        "longDesc": "This project is part of the submission for freeCodeCamp Front End Development Libraries. The objective is to build Markdown Previewer based on user stories provided here. This project must be built using any mix of HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux, and jQuery. Thus, i use the mix of Reactjs and Redux for this project.",
        "repo": "https://github.com/NafisHandoko/markdown-previewer",
        "demo": "https://react-mdpreviewer.netlify.app/",
        "img": "/img/portfolio/mdpreviewer.png"
    },
    {
        "title": "TempSticky",
        "shortDesc": "This a Temporary Sticky Note Website using Reactjs",
        "longDesc": "This is Web App where you can add notes using sticky note. Note that the sticky notes that you’ve written here are temporary, means that it will be deleted when you close the page.",
        "repo": "https://github.com/NafisHandoko/TempSticky",
        "demo": "https://tempsticky.netlify.app/",
        "img": "/img/portfolio/tempsticky.png"
    },
    {
        "title": "depr-calc",
        "shortDesc": "Depression Calculator with Flask and LVQ as a Final Project for Datamining Subject in the College",
        "longDesc": "Depression Calculator(depr-calc) is a platform for detecting potential levels of depression. Here you can diagnose how much potential you currently have for depression. This application works using the Learning Vector Quantization method which makes predictions based on the data like age, gender, and also characteristics or symptoms that you can enter in the form.",
        "repo": "https://github.com/NafisHandoko/depr-calc",
        "demo": "https://depr-calc.nafishandoko.repl.co/",
        "img": "/img/portfolio/depr-calc.png"
    },
    {
        "title": "gsheet-crud",
        "shortDesc": "CRUD based Contact Book with Google Sheet API",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/gsheet-crud",
        "demo": "https://nafishandoko.github.io/gsheet-crud/",
        "img": "/img/portfolio/gsheet-crud.png"
    },
    {
        "title": "random-quote",
        "shortDesc": "Random Quote Machine with jQuery, SASS, and Forismatic API",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/random-quote",
        "demo": "https://nafishandoko.github.io/random-quote/",
        "img": "/img/portfolio/random-quote.png"
    },
    {
        "title": "Cokro Collection",
        "shortDesc": "Landing Page for Cokro Collection with Bootstrap",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/cokrocollection",
        "demo": "https://nafishandoko.github.io/cokrocollection/",
        "img": "/img/portfolio/cokrocollection.png"
    },
    {
        "title": "Dahar Flutter",
        "shortDesc": "Javanese Food Shopping App with Flutter",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/dahar-flutter",
        "demo": "https://drive.google.com/drive/folders/1AGUN85hflvn9BBqQEan1iTEymz2K_yry?usp=sharing",
        "img": "/img/portfolio/dahar-flutter.png"
    },
    {
        "title": "React Pomodoro",
        "shortDesc": "Timer/Pomodoro using ReactJS",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/react-clock",
        "demo": "https://nafishandoko-rclock.netlify.app/",
        "img": "/img/portfolio/react-clock.png"
    },
    {
        "title": "React Calculator",
        "shortDesc": "Calculator built with Reactjs for freeCodeCamp Submission",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/react-calculator",
        "demo": "https://nafishandoko-rcalculator.netlify.app/",
        "img": "/img/portfolio/react-calculator.png"
    },
    {
        "title": "Drum Machine",
        "shortDesc": "Drum Machine with Reactjs for freeCodeCamp Submission",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/drum-machine",
        "demo": "https://nafishandoko-drummachine.netlify.app/",
        "img": "/img/portfolio/drum-machine.png"
    },
    {
        "title": "Gotravel",
        "shortDesc": "Travel Landing Page with React & Tailwind",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/gotravel/tree/jadi",
        "demo": "https://react-gotravel.netlify.app/",
        "img": "/img/portfolio/gotravel.png"
    },
    {
        "title": "Artcody",
        "shortDesc": "Artcody Landing Page with HTML, CSS, and AOS",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/artcody-official",
        "demo": "https://nafishandoko.github.io/artcody-official/",
        "img": "/img/portfolio/artcody.png"
    },
    {
        "title": "DeboksKas",
        "shortDesc": "Financial Record App with Laravel",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/benny-rs/deboks-kas",
        "demo": "https://deboks-kas.000webhostapp.com/",
        "img": "/img/portfolio/debokskas.png"
    },
    {
        "title": "Fylo",
        "shortDesc": "Fylo Landing Page with HTML, CSS for FrontendMentor submission",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/fylo-landing-page",
        "demo": "https://nafishandoko.github.io/fylo-landing-page/",
        "img": "/img/portfolio/fylo.png"
    },
    {
        "title": "HaDe",
        "shortDesc": "HaDe Landingpage, Admin, and Customer side with React & Tailwind",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "#",
        "demo": "https://hade-matpro.netlify.app/",
        "img": "/img/portfolio/hade.png"
    },
    {
        "title": "SPDM",
        "shortDesc": "Student Information Management System with Laravel & Tailwindcss",
        "longDesc": "lorem ipsum dolor sit amet",
        "repo": "https://github.com/NafisHandoko/spdm-yhc",
        "demo": "https://spdm-yhc.000webhostapp.com/",
        "img": "/img/portfolio/spdm-yhc.png"
    }
])
</script>