import { Title, TitleComponent } from 'react-admin';
import { ApiError } from '../../dataProvider/errors';

interface ErrorProps {
    title?: TitleComponent;
    error?: Error;
    errorInfo?: {
        componentStack: string;
    };
}

export const MyError = ({ title, error, errorInfo }: ErrorProps) => {
    const handleGoHome = () => {
        window.location.href = '/';
    };

    const handleRetry = () => {
        window.location.reload();
    };

    // Определяем тип ошибки для соответствующего отображения
    const getErrorColor = (error?: Error) => {
        if (error instanceof ApiError) {
            return error.statusCode === 404 ? '#ff9800' : '#d32f2f';
        }
        return '#d32f2f';
    };

    // Получаем дополнительные детали из ApiError
    const getErrorDetails = (error?: Error) => {
        if (error instanceof ApiError) {
            return {
                resource: error.resource,
                statusCode: error.statusCode,
                details: error.details
            };
        }
        return null;
    };

    const errorDetails = getErrorDetails(error);

    return (
        <div className="shadow-md p-8 m-8 max-w-3xl mx-auto bg-white rounded-lg">
            <Title title={title || "Error"} />
            
            {error instanceof ApiError && error.statusCode === 404 ? (
                <>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: '#ff9800' }}>
                        Страница не найдена
                    </h4>
                    <p className="mb-2">
                        {error.message}
                    </p>
                </>
            ) : (
                <>
                    <h4 className="text-2xl font-bold mb-2" style={{ color: getErrorColor(error) }}>
                        Произошла ошибка
                    </h4>
                    <p className="mb-2">
                        {error?.message || 'Произошла ошибка при выполнении вашего запроса.'}
                    </p>
                </>
            )}

            {/* Детали ApiError */}
            {errorDetails && (
                <>
                    <hr className="my-4" />
                    <h5 className="text-lg font-semibold mb-2">
                        Детали ошибки:
                    </h5>
                    {errorDetails.resource && (
                        <p className="text-base">
                            Ресурс: {errorDetails.resource}
                        </p>
                    )}
                    {errorDetails.statusCode && (
                        <p className="text-base">
                            Код ошибки: {errorDetails.statusCode}
                        </p>
                    )}
                    {errorDetails.details && process.env.NODE_ENV === 'development' && (
                        <div className="shadow-sm p-4 m-4 bg-gray-100 overflow-x-auto">
                            <pre className="whitespace-pre-wrap">
                                {JSON.stringify(errorDetails.details, null, 2)}
                            </pre>
                        </div>
                    )}
                </>
            )}

            {/* Стек вызовов в режиме разработки */}
            {process.env.NODE_ENV === 'development' && errorInfo && (
                <>
                    <hr className="my-4" />
                    <div className="shadow-sm p-4 m-4 bg-gray-100 overflow-x-auto">
                        <h5 className="text-lg font-semibold mb-2">
                            Стек вызовов:
                        </h5>
                        <pre className="whitespace-pre-wrap">
                            {errorInfo.componentStack}
                        </pre>
                    </div>
                </>
            )}

            <div className="mt-8">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
                    onClick={handleGoHome}
                >
                    На главную
                </button>
                <button
                    className="bg-transparent hover:bg-gray-200 text-blue-500 font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={handleRetry}
                >
                    Перезагрузить
                </button>
            </div>
        </div>
    );
};
