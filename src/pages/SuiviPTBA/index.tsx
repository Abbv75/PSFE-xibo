import React, { useEffect } from 'react'
import usePageLooper from '../../contexts/PageLooper/hook';
import Component from './Component';
import { PAGE_T } from '../../types';

export default () => {
    const { setPages, ptba_ziboData } = usePageLooper();

    useEffect(() => {
        const newPages: PAGE_T[] = ptba_ziboData.map((value, index) => {
            return {
                id: `ptba-zibo-${index}`,
                component: <Component data={value} />,
                duration: 30000,
                preload: true
            }
        })

        setPages(
            (prev: PAGE_T[]) => [
                ...prev.filter(
                    ({ id }) => id != 'PTBA_ZIBO'
                ),
                ...newPages
            ]
        );
    }, [ptba_ziboData])

    return (null)
}
