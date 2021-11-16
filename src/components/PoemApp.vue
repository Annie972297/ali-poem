<template>
    <div class="container">
        <div class="category">
            这是主题
        </div>
        <div class="content">
            <div class="lable">
                <poem-label/>
            </div>
            <div class="poem_area">
                <div class="last"/>
                <poem-display/>
                <div class="next"/>
            </div>
            
        </div>
    </div>
</template>

<script>
import PoemDisplay from './PoemDisplay.vue'
import PoemLabel from './PoemLabel.vue'

export default {
    name:"PoemApp",
    components: {PoemLabel, PoemDisplay }
    
}
</script>

<style scoped>
    
.container{
    height:800px;
    display:flex;
    flex-direction: column;
    margin:auto;
    border:1px solid black;
}
.content{
    display: flex;
    flex-direction: column;
    margin: auto;
    border:1px solid black;
}
.poem_area{
    display:flex;
    flex-direction:row;
    margin: auto;
    width: 100%;
    border:1px solid black;
}
.last{
    align-self: center;
    border-width:40px;
    border-style:solid;
    border-color:transparent rgb(241, 236, 228) transparent transparent;
}
.last:hover{
    border-color:transparent rgba(0, 0, 0, 0.301) transparent transparent;
}
.next{
    align-self: center;
    border-width:40px;
    border-style:solid;
    border-color:transparent  transparent transparent rgb(241, 236, 228);
}
.next:hover{
    border-color:transparent  transparent transparent rgba(0, 0, 0, 0.301);
}
</style>