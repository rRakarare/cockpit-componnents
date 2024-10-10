export type ApiResponse<T> = {
    statusCode: number;
    success: boolean;
    data: T;
};