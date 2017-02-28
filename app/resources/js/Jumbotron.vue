<style scoped>
.jumbotron {
    margin: -40px;
}

h1 {

}

p {

}
</style>

<template>
    <div>
        <div class="jumbotron text-center">
            <div class ="container">
                <slot name="heading"></slot>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>

</script>