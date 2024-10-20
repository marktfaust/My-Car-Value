import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateReportDto } from './create-report.dto';
import { ReportsService } from './reports.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {}

    @UseGuards(AuthGuard)
    @Post()
    createReport(@Body() body: CreateReportDto) {
        return this.reportsService.create(body);
    }
}
