import useAxios from 'axios-hooks'
import React, { useEffect, useState } from 'react'
import { Card } from 'antd'

const Hello = () => {
    const [data, setData] = useState<{ url: string, message: string }>()
    const [loading, setLoading] = useState<boolean>(true)
    const [{ data: appData }] = useAxios({ url: 'http://localhost:8080/', method: 'GET' }, { manual: false })

    useEffect(() => {
        if (appData) {
            console.log(appData)
            setData(appData)
            setLoading(false)
        }
    }, [appData])

    return <>
        <Card title="demo code" loading={loading}>
            <p>URL: {data?.url}</p>
            <p>Message: {data?.message}</p>
        </Card>
    </>
}

export default Hello