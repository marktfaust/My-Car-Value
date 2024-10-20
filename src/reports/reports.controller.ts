import { Controller, Post, Body } from '@nestjs/common';
import { CreateReportDto } from './create-report.dto';

@Controller('reports')
export class ReportsController {

    @Post()
    createReport(@Body() body: CreateReportDto) {

    }
}
