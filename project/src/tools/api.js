import { get, post } from './http';

// scene展示(八个图标)
const sceneIconListApi = () => get('/ahome/mobile/main/getMainMiniProgramHomeInfo.do');

// swiper(轮播图)
const swiperApi = () => get('/swiper/cache/today_recommend_template_v2/today_recommend_mobile_v2_20_50_1?v=1618750884000&_dataClientType=3&client_type=40');

// recommend(推荐专题)
const recommendApi = () => get('/ahome/solutionSubject/theme.do?_dataType=json&_dataClientType=3&_dataClientType=3&client_type=40&solutionSubjectId=1&pageNum=1&pageSize=6&templatePageSize=6&type=3&device=2');

// tag(搜索页面热门搜索标签)
const tagListApi = () => get('/ahome/template/getRecommendKeyword.do?_dataType=json');

// showList(推荐专题中的手机海报 每日一签.......)
const showListApi = p => get('/ahome/mobile/main/getSceneDetail.do?', p);

// 首页换一换
const changeApi = p => get(`/swipercache/today_recommend_template_v2/today_recommend_mobile_v2_${p.id}_6_${p.num}?v=1663725712000&client_type=40&_dataClientType=3`)

// 推荐专题下每日一签、外卖店装模板等点击进入后的内容
const recommendDetailsApi = p => get(`/ahome/solutionSubject/themeExtend/template.do?_dataType=json&_dataClientType=3&client_type=40&themeExtendId=${p.id}&pageSize=6&pageNum=${p.pageCount}`);

// 手机海报、每日一签.....等点击进入的头部标签
const sceneTag = p => get(`/abc/home/getDesignType.do?_dataType=json&client_type=40&second_kind_id=${p}&_dataClientType=3`)

// 搜索
const searchApi = p => post(`/ahome/template/wxSmallAppSearch.do?_dataType=json&kw=${p.kw}&time_order=${p.type}&second_kind_id=${p.id}`);

// 搜索分类
const searchTypeList = () => post(`/ahome/designkind/getDesignKindBasicInfo.do?_dataType=json&client_type=40&type=2&_dataClientType=3`)

// 详情
const detailApi = p => get(`/abc/designtemplate/getDetailCacheFileUrl.do?_dataType=json&_dataClientType=3&client_type=40&id=${p} `)

// 
const sceneImg = p => {
    if (p.code == 0 && p.one == 0 && p.two == 0) {
        return get(`/swiper/cache/today_recommend_template_v2/today_recommend_mobile_v2_${p.id}_50_${p.n}?v=1663725712000&client_type=40&_dataClientType=3`);
    } else {
        if (p.code == 0) {
            return get(`/swiper/cache/wx_app_template_cache_v2/0_${p.n}_50_0_${p.id}_0_0_${p.one}_${p.two}?v=1663695248220&client_type=40&_dataClientType=3`);
        } else {
            if (p.id != 34 && p.id != 4) {
                return get(`/swiper/cache/wx_app_template_cache_v2/1_${p.n}_50_${p.id}_0_0_${p.code}_${p.one}_${p.two}?v=1663329490371&client_type=40&_dataClientType=3`);
            } else {
                console.log(p.id);
                return get(`/swiper/cache/wx_app_template_cache_v2/1_${p.n}_50_${p.id}_0_${p.code}_0_${p.one}_${p.two}?v=1663198608932&client_type=40&_dataClientType=3`);
            }
        }
    }
}

export {
    sceneIconListApi,
    swiperApi,
    recommendApi,
    tagListApi,
    showListApi,
    recommendDetailsApi,
    sceneTag,
    sceneImg,
    searchApi,
    changeApi,
    detailApi,
    searchTypeList,
}
