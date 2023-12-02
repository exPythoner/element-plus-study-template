<script setup>

</script>


<template>
    <div class="f-header">
        <!-- <h2>f-header组件</h2> -->
        <div class="logo">
            <a href="https://vitejs.dev" target="_blank">
                <img src="@/assets/vite.svg" class="logo-vite" alt="Vite logo" />
            </a>
            <!-- <a href="https://vuejs.org/" target="_blank">
                <img src="@/assets/vue.svg" class="logo-vue" alt="Vue logo" />
            </a> -->
        </div>
        <div class="nav">
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Nav</a></li>
            <li><a href="#">Setting</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Follow</a></li>
        </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>

.f-header {
    height: 30px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}

.logo {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}
.logo a {
    display: block;
    padding: 1em;

}
.logo-vite:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo-vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}


.nav ul {
    width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.nav li a {
    font-size: 16px;
    color: #999;
}
.nav li a:hover {
    border-bottom: 2px solid #f40;
    color: #f40;
}
</style>