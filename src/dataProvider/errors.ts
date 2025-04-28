export class ApiError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public resource?: string,
    public details?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export class DataNotFoundError extends ApiError {
  constructor(resource: string, details?: any) {
    super(
      `Данные не найдены для ресурса "${resource}"`,
      404,
      resource,
      details
    );
    this.name = 'DataNotFoundError';
  }
}

export class InvalidResponseError extends ApiError {
  constructor(resource: string, details?: any) {
    super(
      `Некорректный ответ от сервера для ресурса "${resource}"`,
      500,
      resource,
      details
    );
    this.name = 'InvalidResponseError';
  }
}

export class NetworkError extends ApiError {
  constructor(resource: string, originalError: Error) {
    super(
      `Ошибка сети при запросе к ресурсу "${resource}": ${originalError.message}`,
      0,
      resource,
      { originalError }
    );
    this.name = 'NetworkError';
  }
}
