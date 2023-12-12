import Vue from 'vue';
import Vuex from 'vuex';
import { UsersModule } from "../store/modules/UsersModule";
import { UtilsModule } from "../store/modules/UtilsModule";
import { AuthModule } from "../store/modules/AuthModule";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        UsersModule,
        UtilsModule,
        AuthModule,
    }
})

export default store