import Koa from "koa";
import Router from "koa-router";

const app = new Koa();
const PORT = 4000;
const router = new Router();

router.get("/",(ctx,next) => {
    ctx.body = "<p>홈</p>";
});

router.get("/about",(ctx,next) => {
    ctx.body = "<p>소개</p>"
});

router.get("/about/:name",(ctx,next) => {
    const { name } = ctx.params;
    ctx.body = `<p>${name} 의 소개</p>`;
});

router.get('/post',(ctx,next) => {
    const { id } = ctx.request.query;
    if(id) {
        ctx.body = `<p>포스트 # ${id}</p>`;
    } else {
        ctx.body = `<p>포스트 아이디가 없습니다</p>`;
    }
});


app.use(router.routes()).use(router.allowedMethods()); // 이건 정확히 무슨 뜻이지?

app.listen(PORT,() => {
    console.log(`hello koa http://localhost:${PORT}`);
});