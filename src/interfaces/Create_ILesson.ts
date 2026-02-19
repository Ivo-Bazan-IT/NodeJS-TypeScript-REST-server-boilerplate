import { Types } from "mongoose";

export interface Create_Lesson {
  title: string;
  content: string;
  duration: number; // Duración en minutos
  courseId?: Types.ObjectId | string; // ID del curso al que pertenece la lección (opcional)
}
