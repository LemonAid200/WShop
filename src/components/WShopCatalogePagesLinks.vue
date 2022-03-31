<template>
    <div id="links_wrapper">
            <div id="links">
                <div class="page_link underline">1</div>
                <div class="page_link">2</div>
                <div class="page_link">3</div>
            </div>
    </div>
</template>

<style scoped>

    #links_wrapper{
        width: 100vw;
        height: fit-content;
       
        margin-top: 30px;
        
    }

    #links{
        display: inline-flex;
        width: fit-content;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }
    .page_link{
        margin: 10px 20px;
        cursor: pointer;
    }

    .underline{
        text-decoration: underline;
    }

</style>