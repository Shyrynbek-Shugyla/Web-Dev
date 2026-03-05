import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
    selector: 'app-album-detail',
    standalone: true,
    imports: [CommonModule, RouterLink, FormsModule],
    templateUrl: './album-detail.html',
    styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
    album: Album | null = null;
    editTitle = '';
    loading = true;
    saving = false;
    saved = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private albumService: AlbumService
    ) { }

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.albumService.getAlbum(id).subscribe({
            next: (album) => {
                this.album = album;
                this.editTitle = album.title;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            }
        });
    }

    saveTitle(): void {
        if (!this.album) return;
        this.saving = true;
        this.saved = false;
        const updated: Album = { ...this.album, title: this.editTitle };
        this.albumService.updateAlbum(updated).subscribe({
            next: (result) => {
                this.album = { ...this.album!, title: this.editTitle };
                this.saving = false;
                this.saved = true;
                setTimeout(() => this.saved = false, 2000);
            },
            error: () => {
                this.saving = false;
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/albums']);
    }
}
