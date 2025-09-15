import {useRouteError} from "react-router";

function ErrorPage() {
    const error = useRouteError();
    return <div>

        {error.state = 404
            ? <div><h1>404 not found</h1><span>Try</span></div>
            : <div> {JSON.stringify(error)}</div>
        }
    </div>
}