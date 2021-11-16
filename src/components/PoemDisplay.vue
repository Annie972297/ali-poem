<template>
    <div class="container">
        <div class="content">
            这是诗词内容
        </div>
        <div class="analysis">
            这是翻译和解析
        </div>
    </div>
</template>

<script>
export default {
    name:"PoemDisplay"
}
</script>

<style scoped>
.container{
    width:433px;
    height:700px;
    display: flex;
    margin:0 20px;
    flex-direction: column;
    background-color: #C7EDCC;
    border:1.8px solid rgb(241, 230, 230); 
    border-radius:15px;
    box-shadow:0 0 15px #666;
}

</style>