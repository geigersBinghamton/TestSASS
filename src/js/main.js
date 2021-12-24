import React from "react";
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {QueryClient,QueryClientProvider} from "react-query";
import { CookiesProvider } from 'react-cookie';
import {ToastProvider} from "react-toast-notifications";

import '../css/reset.css';
import '../css/styles.css';

import StartApp from "./app";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            cacheTime:1800000,
            staleTime:60000,
            notifyOnChangeProps:['data','error'],
            retry:2,
            retryDelay:attempt=>Math.min(attempt > 0 ? 2 ** attempt * 2000 : 1000, 30 * 1000)
        }
    }
});

ReactDOM.render(
    <HashRouter>
        <QueryClientProvider client={queryClient}>
            <CookiesProvider>
                <ToastProvider autoDismiss placement="bottom-right">
                    <StartApp/>
                </ToastProvider>
            </CookiesProvider>
        </QueryClientProvider>            
    </HashRouter>,document.getElementById('root')
);