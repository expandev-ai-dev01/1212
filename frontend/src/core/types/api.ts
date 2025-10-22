export interface ApiError {
  status?: number;
  message: string;
  data?: any;
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success: boolean;
}
