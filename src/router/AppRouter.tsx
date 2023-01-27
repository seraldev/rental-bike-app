import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IRoute, routes } from '.';
import { Layout } from '../components';
import { Home } from '../pages';


export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                {
                    routes.map(({ path, Component }: IRoute) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <Suspense fallback={<>Loading...</>}>
                                    <Component />
                                </Suspense>
                            }
                        />
                    ))
                }
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}
